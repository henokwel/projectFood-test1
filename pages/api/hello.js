// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import PlaceData from "../../placeData.json"

export default function handler(req, res) {
  //   console.log(req.body);
  // const myRequest = JSON.parse(req.body)


  // fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${"KungligaOperan"}&inputtype=textquery&fields=place_id&rating&type&key=${process.env.MY_KEY}`)
  // fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=restaurant&inputtype=textquery&locationbias=circle%3A2000%59.342543095794134%2C18.039535550938297&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cprice_level&key=${process.env.MY_KEY}`)
  // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=59.5280591%2C17.913884&radius=1500&type=restaurant&keyword=restaurant&key=${process.env.MY_KEY}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     return res.status(200).json({ data: data })
  //   })
  //   .catch(e => res.status(400))


  // ==> Get current position 
  // ==> Get Nearby Search





  /// Default Nearby Search

  // const newData = JSON.parse(JSON.stringify(PlaceData))

  console.log("newData", newData);
  res.status(200).json({ data: newData })
}
