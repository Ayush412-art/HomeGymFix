import axios from "axios";

export const options = {
  method: 'GET',
  url: '',
  params: {
    limit: '500',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': 'aabbc0ea6fmsh387df11c4c78f24p1f5970jsnb986e4cfe580',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
export  const fetchData = async(url , options)=>{

try {
	const response = await axios.get(url ,  options);
	const data = response.data;
    return data;
} catch (error) {
	console.error(error);
}
}