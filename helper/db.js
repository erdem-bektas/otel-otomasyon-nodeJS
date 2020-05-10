const mongoose=require('mongoose');

module.exports = ()=>{

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://opia:eECdLtCHQFjh5jJ2@cluster-l1u5l.mongodb.net/');
//mongodb+srv://<username>:<password>@cluster-l1u5l.mongodb.net/test?retryWrites=true&w=majority
mongoose.connection.on('open',()=>{
  console.log('MongoDB Connected');
});
mongoose.connection.on('error',(err)=>{

  console.log('MongoDB Connection is Failed',err);
});
mongoose.Promise=global.Promise;
};
