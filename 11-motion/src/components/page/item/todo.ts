import { BaseComponent } from '../../component.js';

export class ToDoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
                <h2 class="todo__title"></h2>
                <input type="checkbox" class="todo-checkbox">
        </section>`);

    const titileElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
    titileElement.textContent = title;

    const todoElement = this.element.querySelector('.todo-checkbox')! as HTMLParagraphElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
