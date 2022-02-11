const userSchema = require('./user')
const candidateSchema = require('./candidate')
const electionSchema = require('./election')
const electionCategorySchema = require('./election_category')
const electionVoterSchema = require('./election_voter')
const organisationSchema = require('./organisations')
const portfolioSchema = require('./portfolio')
const priceSchema = require('./price')
const subsSchema = require('./subs')
const ticketSchema = require('./ticket')
const ticketReplySchema = require('./ticket_reply')
const voteSchema = require('./vote')
const voterSchema = require('./voter')

module.exports = {
    User: (db) => db.model('User', userSchema),
    Candidate: (db) => db.model('Candidate', candidateSchema),
    Election: (db) => db.model('Election', electionSchema),
    ElectionCategory: (db) => db.model('ElectionCategory', electionCategorySchema),
    ElectionVoter: (db) => db.model('ElectionVoter', electionVoterSchema),
    Organisation: (db) => db.model('Organisation', organisationSchema),
    Portfolio: (db) => db.model('Portfolio', portfolioSchema),
    Price: (db) => db.model('Price', priceSchema),
    Subs: (db) => db.model('Subs', subsSchema),
    Ticket: (db) => db.model('Ticket', ticketSchema),
    TicketReply: (db) => db.model('TicketReply', ticketReplySchema),
    Vote: (db) => db.model('Vote', voteSchema),
    Voter: (db) => db.model('Voter', voterSchema),
}