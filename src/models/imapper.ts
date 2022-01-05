export interface IMapper<T> {
  map(item: any): T 
  unmap(item: T): object
}