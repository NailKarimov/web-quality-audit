import { test, expect } from '../../src/fixtures';

type Product = { id: string | number; name: string; price: number; is_rental?: boolean };
type Page<T> = { current_page: number; data: T[]; per_page: number; total: number; last_page: number };

test.describe('REST API', () => {
  test('the product list is paginated and every product has an id, a name and a price', async ({ api }) => {
    const res = await api.get('/products?page=1');
    expect(res.status()).toBe(200);
    const body = (await res.json()) as Page<Product>;
    expect(body.current_page).toBe(1);
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data.length).toBeLessThanOrEqual(body.per_page);
    expect(body.total).toBeGreaterThan(body.data.length);
    for (const p of body.data) {
      expect(p.id).toBeTruthy();
      expect(p.name).toMatch(/\S/);
      expect(typeof p.price).toBe('number');
      expect(p.price).toBeGreaterThan(0);
    }
  });

  test('page 2 holds different products than page 1', async ({ api }) => {
    const one = (await (await api.get('/products?page=1')).json()) as Page<Product>;
    const two = (await (await api.get('/products?page=2')).json()) as Page<Product>;
    const ids = new Set(one.data.map((p) => p.id));
    expect(two.data.filter((p) => ids.has(p.id))).toEqual([]);
  });

  test('search returns only products whose name matches', async ({ api }) => {
    const body = (await (await api.get('/products/search?q=pliers')).json()) as Page<Product>;
    expect(body.data.length).toBeGreaterThan(0);
    for (const p of body.data) expect(p.name).toMatch(/plier/i);
  });

  test('an unknown product answers 404 with a message', async ({ api }) => {
    const res = await api.get('/products/does-not-exist');
    expect(res.status()).toBe(404);
    expect(await res.json()).toEqual({ message: 'Requested item not found' });
  });

  test('the category tree has the top-level categories', async ({ api }) => {
    const tree = (await (await api.get('/categories/tree')).json()) as {
      name: string;
      sub_categories: unknown[];
    }[];
    expect(tree.map((c) => c.name)).toEqual(expect.arrayContaining(['Hand Tools', 'Power Tools']));
    expect(tree.find((c) => c.name === 'Hand Tools')!.sub_categories.length).toBeGreaterThan(0);
  });

  test('the user profile needs a login', async ({ api }) => {
    const res = await api.get('/users/me');
    expect(res.status()).toBe(401);
  });

  test('login with an unknown account is refused with 401 and no details', async ({ api }) => {
    const res = await api.post('/users/login', {
      data: { email: 'nobody-wqa@example.com', password: 'Wrong-pass-123' },
    });
    expect(res.status()).toBe(401);
    const body = JSON.stringify(await res.json());
    expect(body).not.toMatch(/sql|exception|stack|trace/i);
  });
});
