import { NodeType } from '../../node.js';
import { IExpression, ExpressionType } from '../exp.js';
import { Expression } from '../types.js';
export type UnaryOperator = 'not' | '-' | '~' | '#';
export class UnaryOperationExpression implements IExpression {
  readonly expressionType = ExpressionType.UnaryOperationExpression;
  readonly type = NodeType.Expression;

  constructor(
    public operator: string|UnaryOperator,
    expression: Expression,
  ) {
    this.children = [expression];
  }

  get expression() {
    return this.children[0];
  }

  set expression(expression) {
    this.children[0] = expression;
  }

  children: [Expression];
}
