import { get, patch, post, put } from "./web.request";
import { ENDPOINTURL } from "../utils/helper";

export const loginHandlerData = (body) => {
  return post(`${ENDPOINTURL}/user/signin`, body);
};

//sliver

export const sliverHndlerData = (body) => {
  return post(`${ENDPOINTURL}/sliver/list`, body);
};
export const addsliverHandler = (body) => {
  return post(`${ENDPOINTURL}/sliver`, body);
};
export const editsliverHandler = (id, body) => {
  return put(`${ENDPOINTURL}/sliver/${id}`, body);
};
export const editWithoutImgsliver = (id, body) => {
  return patch(`${ENDPOINTURL}/sliver/${id}`, body);
};
export const getsliverHandler = (id) => {
  return get(`${ENDPOINTURL}/sliver/${id}`);
};

//golden

export const goldenHndlerData = (body) => {
  return post(`${ENDPOINTURL}/golden/list`, body);
};
export const addgoldenHandler = (body) => {
  return post(`${ENDPOINTURL}/golden`, body);
};
export const editgoldenHandler = (id, body) => {
  return put(`${ENDPOINTURL}/golden/${id}`, body);
};
export const editWithoutImg = (id, body) => {
  return patch(`${ENDPOINTURL}/golden/${id}`, body);
};
export const getgoldenHandler = (id) => {
  return get(`${ENDPOINTURL}/golden/${id}`);
};

//banner

export const bannerHndlerData = (body) => {
  return post(`${ENDPOINTURL}/banner/list`, body);
};
export const addbannerHandler = (body) => {
  return post(`${ENDPOINTURL}/banner`, body);
};
export const editbannerHandler = (id, body) => {
  return put(`${ENDPOINTURL}/banner/${id}`, body);
};
export const getbannerHandler = (id) => {
  return get(`${ENDPOINTURL}/banner/${id}`);
};

//products
export const productsHndlerData = (body) => {
  return post(`${ENDPOINTURL}/goldenproduct/list`, body);
};
export const addproductsHandler = (body) => {
  return post(`${ENDPOINTURL}/goldenproduct`, body);
};
export const editproductsHandler = (id, body) => {
  return put(`${ENDPOINTURL}/goldenproduct/${id}`, body);
};
export const editWithoutImgproductsHandler = (id, body) => {
  return patch(`${ENDPOINTURL}/goldenproduct/${id}`, body);
};
export const getproductsHandler = (id) => {
  return get(`${ENDPOINTURL}/goldenproduct/${id}`);
};

export const sliverproductsHndlerData = (body) => {
  return post(`${ENDPOINTURL}/product/list`, body);
};
export const addsliverproductsHandler = (body) => {
  return post(`${ENDPOINTURL}/product`, body);
};
export const editsliverproductsHandler = (id, body) => {
  return put(`${ENDPOINTURL}/product/${id}`, body);
};
export const editsliverproductswImage = (id, body) => {
  return patch(`${ENDPOINTURL}/product/${id}`, body);
};
export const getsliverproductsHandler = (id) => {
  return get(`${ENDPOINTURL}/product/${id}`);
};

//career
export const careerHndlerData = (body) => {
  return post(`${ENDPOINTURL}/career/list`, body);
};
export const addcareerHandler = (body) => {
  return post(`${ENDPOINTURL}/career`, body);
};
export const editcareerHandler = (id, body) => {
  return put(`${ENDPOINTURL}/career/${id}`, body);
};
export const getcareerHandler = (id) => {
  return get(`${ENDPOINTURL}/career/${id}`);
};

//contact

export const contactHndlerData = (body) => {
  return post(`${ENDPOINTURL}/contact/list`, body);
};
