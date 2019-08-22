import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
  domain: "level-up-tuts-test-store.myshopify.com",
  storefrontAccessToken: "4a7180a850bab6c7342da570e7bfc08f",
})

export const StoreContext = React.createContext({
  client,
})
