const mongoose=require('mongoose');

module.exports = ()=>{

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
  
//mongodb connection string  should be pasted   
mongoose.connect('<mongodb connection link>');
  
mongoose.connection.on('open',()=>{
  console.log('MongoDB Connected');
});
mongoose.connection.on('error',(err)=>{

  console.log('MongoDB Connection is Failed',err);
});
mongoose.Promise=global.Promise;
};
