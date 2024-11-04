const { setPosts } = require("@/redux/postSlice");
const { default: axios } = require("axios");
const { useEffect } = require("react");
const { useDispatch } = require("react-redux");

const UserGetAllPost = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/post/all", {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log(res.data);
          dispatch(setPosts(res.data.posts));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPost();
  }, []);
};

export default UserGetAllPost;
