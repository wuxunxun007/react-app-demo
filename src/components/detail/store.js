const reducer = (state = {banner: [1,2,3], prolist: []}, {type, data}) => {
  const {banner, prolist} = state;
  switch (type) {
    case 'CHANGE_BANNER':
      return {banner: data, prolist};
    case 'CHANGE_PROLIST':
        return {prolist: data, banner};;
    default:
      return state;
  }
}

export default reducer;
