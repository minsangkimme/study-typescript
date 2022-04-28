{
    // Partial 은 기존 타입중에서 부분적인것만 허용하고 싶을 때 유용함
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
    };
    
    function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo: ToDo = {
        title: 'learn typescript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    }

    const update = updateToDo(todo, { priority: 'low' });
    console.log(update)

}
