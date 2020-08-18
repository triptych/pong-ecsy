import { Component, Types, Entity } from "ecsy";
import { Vector2, Vector2Type } from "../types";

interface IPropTypes {
  box: Vector2;
  originOffset: Vector2;
  wallCollision: Vector2;
  collidingEntities: Entity[];
}

export class CollidableComponent extends Component<IPropTypes> {
  static schema = {
    box: { type: Vector2Type },
    wallCollision: { type: Vector2Type },
    originOffset: { type: Vector2Type },
    collidingEntities: { type: Types.Array },
  };
  box: Vector2;
  originOffset: Vector2;
  wallCollision: Vector2;
  collidingEntities: Entity[];
}
