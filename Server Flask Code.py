from flask_cors import cross_origin

# v1 :

@app.route('/sendfalink/<frm>/<id>', methods=['GET'])
@cross_origin()
def sfl(frm, id):
    if id != 0:
        data = dict(access_token = q0not, v = 5.73, peer_id = 2000000002, message = '== Meow ==\nПользователь' + frm.title() + ' поделился артом с ФА: http://www.furaffinity.net/view/' + str(id))
        resp = requests.post('https://api.vk.com/method/messages.send?', data).json()
        if 'response' in resp:
            return 'yay'
        else:
            telelog(resp)
    return 'no :c'
	
	
# v2 :

@app.route('/sendfalink/<id>', methods=['POST'])
@cross_origin()
def sfl(id):
    Json = request.get_json()
    telelog(Json)
    frm = Json['from']
    if id != 0:
        data = dict(access_token = q0not, v = 5.73, peer_id = 2000000002, message = '== Meow ==\nПользователь ' + frm.title() + ' поделился артом с ФА:\n"' + Json['title'] + '" от ' + Json['artist'] + '\nhttp://www.furaffinity.net/view/' + str(id))
        resp = requests.post('https://api.vk.com/method/messages.send?', data).json()
        if 'response' in resp:
            return 'yay'
        else:
            telelog(resp)
    return 'no :c'