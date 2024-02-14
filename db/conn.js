const mongoose = require( "mongoose" );
require( 'dotenv' ).config(); // Load environment variables from .env file

const DB = process.env.DATABASE;
console.log( DB ); // Add this line to print the connection string
mongoose.connect( DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
} )
    .then( () => console.log( "Database Connected" ) )
    .catch( ( err ) => console.error( "Error connecting to the database:", err ) );
