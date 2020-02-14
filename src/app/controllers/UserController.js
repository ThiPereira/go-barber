import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Esse e-mail já essta cadastrado!' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    // retorna todos os dados do usuario
    // return res.json(user);

    // retorna somete os dados que desejamos
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    console.log(req.userId);

    return res.json({ ok: true });
  }
}

export default new UserController();
