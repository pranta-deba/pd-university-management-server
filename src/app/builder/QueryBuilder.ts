/* eslint-disable prettier/prettier */
import { FilterQuery, Query } from 'mongoose';

/* eslint-disable prettier/prettier */
class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (filed) =>
            ({
              [filed]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    // filtering
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  sort() {
    const sort = this?.query?.sort || '-createdAt';
    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }

  paginate() {
    const page = this?.query?.page || 1;
    const limit = this?.query?.limit || 1;
    const skip = this?.query?.skip || 0;
  }
}
