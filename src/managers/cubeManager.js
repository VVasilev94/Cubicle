const cubes = []

exports.getAll = () => cubes.slice()

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId)

exports.create = (cubeData) => {
  const newCube = {
    id: cubes.length + 1,
    ...cubeData,
  }

  cubes.push(newCube)
  return newCube
}