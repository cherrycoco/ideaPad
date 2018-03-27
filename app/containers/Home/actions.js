import { v4 } from 'node-uuid';

export function addIdea(text) {
  return {
    type: 'ADD_IDEA',
    id: v4(),
    text,
  };
}
