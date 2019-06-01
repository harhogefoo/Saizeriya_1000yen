import Repository from '~/repository'

export default (ctx, inject) => {
  const repository = new Repository(ctx.$axios)
  ctx.$repository = repository
  inject('repository', repository)
}
