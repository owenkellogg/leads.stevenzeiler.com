/**
 * LeadsController
 *
 * @description :: Server-side logic for managing Leads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `LeadsController.create()`
   */
  create: function (req, res) {
    Lead.create(req.body).then(lead => {
      return res.status(201).json({
        lead: lead
      });
    })
  },


  /**
   * `LeadsController.index()`
   */
  index: function (req, res) {
    Lead.find().then(leads => {
      return res.status(200).json({
        leads: leads
      });
    })
  }
};

