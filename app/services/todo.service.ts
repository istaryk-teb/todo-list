import {
  addDoc,
  deleteDoc,
  DocumentReference,
  Firestore,
  getDocs,
  collection,
  CollectionReference
} from '@firebase/firestore/lite';
import { TodoItem } from '../models/todo-item';

export class TodoService {

  todoCol: CollectionReference<TodoItem>;

  constructor(private firestore: Firestore) {
    this.todoCol = collection(this.firestore, 'todo')
  }

  async getList(): Promise<TodoItem[]> {
    const snapshot = await getDocs<TodoItem>(this.todoCol);
    return snapshot.docs.map((qds) => qds.data());
  }

  async add(item: TodoItem): Promise<DocumentReference<TodoItem>> {
    return await addDoc<TodoItem>(this.todoCol, item);
  }

  async remove(id: DocumentReference): Promise<void> {
    return await deleteDoc(id);
  }
}
