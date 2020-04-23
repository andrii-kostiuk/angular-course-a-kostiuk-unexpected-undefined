import { ColorList} from './enumColorList';

export interface ColorCount{
  // TODO should be ename instead of string
  readonly color : ColorList,
  count : number
}