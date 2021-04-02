import { useAxios, refetch } from 'use-axios';
import { delete as del, post, put } from 'axios';

export async function postItem(item) {
  await post('/api/items', item);
  await refetch('/api/items');
}

export function useItems() {
  return useAxios('/api/items').data;
}

export async function putItem(item) {
  await put('/api/items', item);
  await refetch('/api/items');
}

export async function deleteItem(id) {
  await del(`/api/items/${id}`);
  await refetch('/api/items');
}
