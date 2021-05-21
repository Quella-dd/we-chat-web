module.exports = function () {
    let ws;
    let subscribers = {};

    function connect() {
        let ws = new WebSocket("ws://localhost:10086/event?token=" + sessionStorage.getItem('token'))

        ws.onopen = function() {
            console.log('websocket connect success');
        }

        ws.onerror = function() {
            connect();
        }

        ws.onmessage = function(msg) {
            _pub(msg);
        }

        ws.onclose = function() {
            console.log("websocket close")
        }
        
        return ws;
    }

    function _pub(msg) {
        debugger
        let data = JSON.parse(msg.data);
        let topic = data.Topic;
        if (subscribers[topic] && subscribers[topic].length) {
            subscribers[topic].forEach(fn => {
                fn(data.Conent)
            });
        }
    }

    return {
        sub: function(topic, fn) {
            if (!ws) {
                ws = connect();
            }
            
            var fns = subscribers[topic];
            if (fns && fns.length) {
                fns.push(fn);
                return;
            }
            subscribers[topic] = [];
            subscribers[topic].push(fn);
        },

        unsub: function(topic, fn) {
            let fns = subscribers[topic];
            if (fns) {
                var index = fns.indexOf(fn);
                if (index !== -1) {
                    fns.splice(index, 1);
                    if (!fns.length) {
                        delete subscribers[topic];
                    }
                }
            }
        },

        pub: _pub
    }
}()