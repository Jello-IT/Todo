export class TodoListModel{
  private _id: string;
  private _name: string;
  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }
  get name(): string{
    return this._name;
  }

  get id(): string{
    return this._id;
  }
}
