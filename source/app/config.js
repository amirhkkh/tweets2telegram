/**
 * @author Sallar Kaboli <sallar.kaboli@gmail.com>
 * @modified by Amir Keshavarz <amirkekh@gmail.com>
 * @date 1/8/16.
 */
module.exports = {
    // Connection Settings
    twitter: {
        consumerKey       : '__CONSUMER_KEY_HERE__',
        consumerSecret    : '__CONSUMER_SECRET_HERE__',
        accessToken       : '__ACCESS_TOKEN_HERE__',
        accessTokenSecret : '__ACCESS_TOKEN_SECRET_HERE__'
    },
	
	// Telegram settings
	telegram: {
		botToken : '__BOT_TOKEN_HERE__',
		channel  : '__CHANNEL_USERNAME_HERE__'
	},

    // Search Settings
    search: {
        query : '%20',
        lang  : 'fa',
        count : 100,
        type  : 'mixed'
    },

    // Languages Settings
    languages: {
        fa: {
            hint: 'PERSIAN'
        },
        ar: {
            hint: 'ARABIC'
        }
    },

    // MongoDB Settings
    db: {
        connection: 'mongodb://localhost:27017/twitter',
        collection: 'tweets'
    },

    // Limitations
    minRetweetCount : 10,
    usersFile       : 'data/users.json',
    stringsFile     : 'data/strings.json',
    secondaryCheck  : true,
    langThreshold   : 470,

    // Others
    filterKeys : ['id', 'id_str', 'text', 'retweet_count'],
    interval   : 120000
};