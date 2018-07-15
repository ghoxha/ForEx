const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//portfolio and user loadouts
const Portfolio = require("../../models/Portfolio");
const User = require("../../models/User");
router.get("/test", (req, res) => {
  res.json({ msg: "portfolio works" });
});
// @route GET api/portfolio
// @desc Get current users portfolio
// @access private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Portfolio.findOne({ user: req.user.id })
      .then(portfolio => {
        if (!portfolio) {
          errors.noportfolio = "No portfolio for this user";
          return res.status(400).json(errors);
        }
        res.json(portfolio);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/portfolio
// @desc Create user portfolio
// @access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const portfolioFields = {};
    portfolioFields.user = req.user.id;
    if (req.body.handle) portfolioFields.handle = req.body.handle;

    Portfolio.findOne({ user: req.user.id }).then(portfolio => {
      if (portfolio) {
        // Update
        Portfolio.findOneAndUpdate({ user: req.user.id }).then(portfolio =>
          res.json(portfolio)
        );
      } else {
        // Create

        // Check if handle exists
        Portfolio.findOne({ handle: portfolioFields.handle }).then(
          portfolio => {
            if (portfolio) {
              errors.handle = "That handle already exists";
              res.status(400).json(errors);
            }

            // Save portfolio
            new Portfolio(portfolioFields)
              .save()
              .then(portfolio => res.json(portfolio));
          }
        );
      }
    });
  }
);

// @route POST api/portfolio/currency
// @desc Add values to currency array
// @access private
router.post(
  "/currency",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOne({ user: req.user.id })
      .then(portfolio => {
        const newCurr = {
          amount: req.body.amount,
          currencyType: req.body.currencyType
        };
        portfolio.currency.unshift(newCurr);
        portfolio.save().then(portfolio => res.json(portfolio));
      })
      .catch(err => res.status(404).json(err));
  }
);
// @route POST api/portfolio/currency
// @desc Update values to currency array
// @access private
router.post(
  "/currency-update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOneAndUpdate(
      { user: req.user.id },
      { "currency:_id": req.body.currId },
      {
        $set: {
          "currency.$.amount": req.body.amount,
          "currency.$.currencyType": req.body.type
        }
      }
    )
      .then(portfolio => {
        console.log(portfolio.currency);
        console.log("done");
        res.json(portfolio);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/portfolio/cryptoCurrency
// @desc Add values to cryptocurrency array
// @access private
router.post(
  "/cryptoCurrency",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOne({ user: req.user.id })
      .then(portfolio => {
        const newCryptoCurr = {
          amount: req.body.amount,
          cryptoType: req.body.cryptoType
        };
        portfolio.cryptoCurrency.unshift(newCryptoCurr);
        portfolio.save().then(portfolio => res.json(portfolio));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/portfolio/stock
// @desc Add values to stock array
// @access private
router.post(
  "/stock",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOne({ user: req.user.id })
      .then(portfolio => {
        const newStock = {
          amount: req.body.amount,
          stockName: req.body.stockName
        };
        portfolio.stock.unshift(newStock);
        portfolio.save().then(portfolio => res.json(portfolio));
      })
      .catch(err => res.status(404).json(err));
  }
);
module.exports = router;
