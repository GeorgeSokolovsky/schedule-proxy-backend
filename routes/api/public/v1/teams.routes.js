const router = require('express').Router();

const modelControllerInstance = require('../../../../public/controllers/model.controller').modelControllerInstance;

const modelName = 'team';

router.get('/', (req, res) => {
  console.log('get for teams');
  modelControllerInstance
    .findAll(modelName)
    .then((models) => {
      console.log('at then with ' + models);
      res.json(models);
    })
    .catch((err) => {
      console.log('error handled ' + err);
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  modelControllerInstance
    .findOne(modelName, req.params.id)
    .then((model) => {
      res.json(model);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  modelControllerInstance
    .save(modelName, req.body.team)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  modelControllerInstance
    .remove(modelName, req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  modelControllerInstance
    .update(modelName, req.params.id, req.body.team)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
