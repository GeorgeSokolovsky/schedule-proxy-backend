const router = require('express').Router();

const modelControllerInstance = require('../../../../public/controllers/model.controller').modelControllerInstance;

const modelName = 'faculty';

router.get('/', (req, res) => {
  modelControllerInstance
    .findAll(modelName)
    .then((models) => {
      res.json(JSON.parse(models));
    })
    .catch((err) => {
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
    .save(modelName, req.body.faculty)
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
    .update(modelName, req.params.id, req.body.faculty)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
