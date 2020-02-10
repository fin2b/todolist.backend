import projectComponent from "../components/projectComponent";

async function retrieveAll() {
  try {
    return await projectComponent.retrieveAll();
  } catch (e) {
    console.log(e);
  }
}

async function retrieve() {
  try {
    return await projectComponent.retrieve();
  } catch (e) {
    console.log(e);
  }
}

async function create(options) {
  try {
    return await projectComponent.createTitle(options);
  } catch (e) {
    console.log(e);
  }
}

async function update(options) {
  try {
    const result = await projectComponent.update(options);
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export default {
  retrieveAll,
  retrieve,
  create,
  update
}