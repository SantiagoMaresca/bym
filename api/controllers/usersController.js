process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nodemailer = require('nodemailer');

exports.sendMail = function(req, res) {
    console.log(req.body)
    var params = {
        asunto: req.body.asunto,
        to: req.body.to,
        mensaje: req.body.mensaje
    }

    // { name: 'santi', email: 'mimail@gmail.com', mensaje: 'buen' }
    const mensaje = req.body.mensaje
    const correoOrigen = "santiago.maresca26@gmail.com"
    const correoDestino = 'barandaymaresca@gmail.com'
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: correoOrigen,
            pass: 'nacional26'
        }
    });

    var mailOptions = {
        from: correoOrigen,
        to: correoOrigen,
        subject: "Consulta en la web",
        text: mensaje
    };

    transport.sendMail(mailOptions, function(error, info) {
        // console.log(msg_str_altervpn_ini);
        if (error) {
            console.log(error);
            res.send(error);
            //callback(true);
        } else {
            console.log("correo enviado " + info);
            res.send(info);
            // callback(false);
        }
        transport.close();
        // console.log(msg_str_altervpn_fin);
    });


};