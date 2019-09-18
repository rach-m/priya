import React, { Component } from "react";
import axios from "axios"

const ProductPage = () => {

  const getData = () => {
    let data = axios.get("http://api.macys.com/v4/catalog/category?expand=[child,parent]&fields=[summary,attributes]&application=[MOBILE]&assortment=[SITE]", {
      headers: {
        "Access-Control-Allow-Origin": "*", "x-macys-webservice-client-id": "agx4a4jfhydkcgcpfyb4wgt7", "Accept": "application/json"
      }
    })
    console.log(data)

  }
  getData()

  return <div></div>
}
export default ProductPage
