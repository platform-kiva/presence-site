

// // export async function storefront(query, variables = {}) {
// //   const response = await fetch(process.env.NEXT_PUBLIC_API_URL,
// //     {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN
// //       },
// //       body: JSON.stringify({ query, variables })
// //     })
// //     return response.json()
// // }

// const adminApiClient = new shopify.clients.Rest({ session });
// const storefrontTokenResponse = await adminApiClient.post({
//   path: 'storefront_access_tokens',
//   type: DataType.JSON,
//   data: {
//     storefront_access_token: {
//       title: 'This is my test access token',
//     },
//   },
// });

// const storefrontAccessToken =
//   storefrontTokenResponse.body['storefront_access_token'][process.env.NEXT_PUBLIC_ACCESS_TOKEN];


// // Shop from which we're fetching data
// const shop = '7a3b4c-2.myshopify.com';

// // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
// const storefrontClient = new shopify.clients.Storefront({
//   domain: shop,
//   storefrontAccessToken,
// });

// // Use client.query and pass your query as `data`
// export const shopifyProducts = await storefrontClient.query({
//   data: `{
//     products(first:3) {
//       edges {
//         node {
//           title
//           handle
//           tags
//           priceRangeV2 {
//             minVariantPrice {
//               amount
//             }
//           }
//           images(first:1) {
//             edges {
//               node {
//                 url(transform:{preferredContentType: PNG})
//                 altText
//               }
//             }
//           }
//         }
//       }
//     }
//   }`,
// });
