import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:4000/api",
  //withCredentials: true
});

const errorHandler = (err) => {
  console.error(err);
  throw err;
};

export default {
  service,
  handleUpload(theFile) {
    return service
      .post("/upload", theFile)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  saveNewThing(newThing){
      return service.post("/events/create", newThing)
      .then(res => res.data)
      .catch(errorHandler)
  },
  profileUpdate(profileUpdate){
    return service.put("/profile/edit-profile", profileUpdate)
    .then(res => res.data)
    .catch(errorHandler)

},
};
