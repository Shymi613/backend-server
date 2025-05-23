const axios = require('axios');

const FHIR_SERVER = process.env.FHIR_SERVER_URL;

exports.createCondition = async (req, res) => {
  try {
    const conditionResource = {
      resourceType: "Condition",
      clinicalStatus: {
        coding: [{
          system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
          code: "active"
        }]
      },
      code: {
        text: req.body.diagnosis
      },
      subject: {
        reference: `Patient/${req.body.patientId}`
      },
      recordedDate: new Date().toISOString(),
      note: [{
        text: req.body.notes
      }]
    };

    const response = await axios.post(`${FHIR_SERVER}/Condition`, conditionResource);
    res.status(201).json(response.data);
    
  } catch (error) {
    console.error('Error creating Condition:', error);
    res.status(500).json({ error: 'Error registrando evolución' });
  }
};

exports.getConditions = async (req, res) => {
  try {
    const response = await axios.get(`${FHIR_SERVER}/Condition?patient=${req.query.patientId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Conditions:', error);
    res.status(500).json({ error: 'Error obteniendo evoluciones' });
  }
};