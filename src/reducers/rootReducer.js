const initState = {
  posts: [
    {id: '1', title: 'Decay youtube singularity', body: 'Car jeans-ware San Francisco stimulate nodality lights office tanto 3D-printed military-grade physical math-Chiba denim concrete. Girl gang boat papier-mache corporation otaku apophenia disposable carbon shanty town shrine. Hotdog vehicle artisanal decay carbon human cartel shoes modem. Franchise post-industrial grade drone silent media neon 8-bit warehouse free-market boy augmented reality marketing. Tower rifle dolphin plastic dome augmented reality DIY. '},
    {id: '2', title: 'Monofilament concrete semiotics', body: 'Car carbon meta-free-market pen saturation point tiger-team systema Chiba assault apophenia. J-pop dissident shoes tattoo assassin-space industrial grade cardboard camera into denim wonton soup face forwards lights artisanal. Weathered tower bridge dissident tube beef noodles pistol-ware advert smart-city claymore mine otaku disposable grenade soul-delay shanty town. Meta-katana San Francisco tower media jeans pistol camera nodality realism plastic rifle. Construct neon otaku hacker artisanal city rain bicycle alcohol boy Kowloon marketing voodoo god. Nano-boy pistol vehicle into office San Francisco knife urban sensory jeans sub-orbital. Drone RAF fluidity apophenia concrete rebar stimulate sub-orbital neon towards dead DIY uplink carbon fetishism augmented reality. Into Tokyo monofilament DIY voodoo god free-market nano-sensory refrigerator marketing man cardboard numinous neural jeans network.'},
    {id: '3', title: 'Sentient sunglasses network rebar', body: 'Cardboard marketing motion office garage smart-futurity gang rebar sentient receding BASE jump. Rain man refrigerator hotdog nodal point dead spook augmented reality. Convenience store j-pop BASE jump hotdog warehouse industrial grade nodal point. Shanty town drugs-ware paranoid bomb wonton soup systemic shoes motion nano-euro-pop nodality man semiotics smart-pen advert. Hacker beef noodles crypto-franchise sensory spook dead Shibuya chrome nodality hotdog monofilament neural. Engine beef noodles vehicle post-cardboard katana tube neural.'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id!==action.id);
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;