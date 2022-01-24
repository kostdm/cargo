const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = path.resolve('server/data/','carriers.json');

module.exports = async(req, res) => {
  try {
    const carriersFileData = await fs.readFile(FILE_NAME);
    const carriers = JSON.parse(carriersFileData);
    const request = carriers.find(item => item.id.toString() === req.params.id.toString());
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({error: 'No data'});
    }
  }
  catch(e) {
    res.status(404).json({error: 'No data'});
  }
};