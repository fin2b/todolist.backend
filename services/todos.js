import todoComponent from "../components/todoComponent";

async function retrieveAll(options) {
  try {
    const result = await todoComponent.retrieveAll(options);
    console.log(result);
    return result;
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
    const result = await todoComponent.update(options);
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function remove(options) {
  try {
    const result = await todoComponent.remove(options);
    console.log(result);
    return result;
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