/**
 * @author Amir Keshavarz <amirkekh@gmail.com>
 * @date 1/8/16.
 */
(function(module) {
    "use strict";

    /* Dependencies */
        var config   = require('../config'),
        database = require('./database'),
        _        = require('lodash'),
		TelegramBot = require('node-telegram-bot-api');

    /* Create a new instance */
	var bot = new TelegramBot(config.telegram.botToken, {polling: true});
	

    /* Private Methods */

    /**
     * Broadcasts some tweets on telegram
     * @param statuses
     * @returns {Promise}
     */
    function broadcast(statuses) {
        return new Promise(function(resolve) {
            var promises = [];

            // Check Database
            statuses.forEach(function(status) {
                promises.push(new Promise(function(r) {
					bot.sendMessage(config.telegram.channel, 'https://twitter.com/statuses/' + status.id_str).then(function(res) {
						database.insert(status).then(function() {
							(r)(1);
						});
					}).catch(function(err) {
						(r)(0);
					});
					
                }));
            });

            // Filter All
            if(promises.length > 0) {
                Promise.all(promises).then(function(data) {
                    (resolve)(_.sum(data));
                });
            } else {
                (resolve)(0);
            }
        });
    }

    /* Public Methods */
    module.exports = {
        broadcast: broadcast
    };
})(module);