import Twit from '../../lib/twit'

export default (req, res) => {
  Twit.get(
    'search/tweets',
    { from: 'FurkanCakici_', count: 12 },
    (err, data, response) => {
      if (err) {
        return res.status(400).json({ message: 'Ups! Bir hata oldu.' })
      }

      res.status(200).json((data))
    }
  )
}
