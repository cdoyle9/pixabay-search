"use client";

import { ImageData } from "@/queries/index";
import { imageDetailContext } from "@/store/ImageDetail";
import { useContext } from "react";
import "./detail.scss";

const Detail = () => {
  const context = useContext(imageDetailContext);
  if (!context?.imageDetail) {
    return <div>No image selected</div>;
  }

  return (
    <div className="image-detail">
      <img src={context.imageDetail.webformatURL}></img>
      <div className="image-metadata">
        <Field field="user" imageDetail={context.imageDetail} />
        <Field field="likes" imageDetail={context.imageDetail} />
        <Field field="collections" imageDetail={context.imageDetail} />
        <Field field="comments" imageDetail={context.imageDetail} />
        <Field field="downloads" imageDetail={context.imageDetail} />
        <Field field="views" imageDetail={context.imageDetail} />
        <Field field="tags" imageDetail={context.imageDetail} />
      </div>
    </div>
  );
};

export default Detail;

const Field = (props: { field: keyof ImageData; imageDetail: ImageData }) => {
  return (
    <span>
      <span>{props.field}: </span>
      <span>{props.imageDetail[props.field]}</span>
    </span>
  );
};
