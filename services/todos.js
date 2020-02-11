import todoComponent from "../components/todoComponent";

async function retrieveAll(options) {
  try {
    return await todoComponent.retrieveAll(options);
  } catch (e) {
    console.log(e);
  }
}

async function create(options) {
  try {
    return await todoComponent.create(options);
  } catch (e) {
    console.log(e);
  }
}

async function update(options) {
  try {
    return await todoComponent.update(options);
  } catch (e) {
    console.log(e);
  }
}

async function remove(options) {
  try {
    return await todoComponent.remove(options);
  } catch (e) {
    console.log(e);
  }
}

export default {
  retrieveAll,
  create,
  update,
  remove
}