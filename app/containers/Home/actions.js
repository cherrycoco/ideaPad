import { v4 } from 'node-uuid';

export function addIdea(text, subject) {
  return {
    type: 'ADD_IDEA',
    id: v4(),
    subject: subject.toUpperCase(),
    text,
  };
}
