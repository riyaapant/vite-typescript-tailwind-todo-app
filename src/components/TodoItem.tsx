import { Trash2 } from "lucide-react"
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo,
    onCompletedChange: (id: number, completed: boolean) => void,
    onItemDelete: (id: number) => void
}

export default function TodoItem({ todo, onCompletedChange, onItemDelete }: TodoItemProps) {

    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input
                    type="checkbox"
                    className="scale-125"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                />
                <span className={
                    todo.completed ? "line-through text-gray-400 grow" : "grow"
                }>
                    {todo.title}
                </span>
                <button
                onClick={() => onItemDelete(todo.id)}>
                    <Trash2 />
                </button>
            </label>
        </div>
    )
}