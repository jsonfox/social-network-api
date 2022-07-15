import { Schema, model } from 'mongoose';
import moment from 'moment';

const Thought = model('Thought', new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [new Schema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
        }
    }, {
        toJSON: { virtuals: true }
    })]
}, {
    toJSON: { virtuals: true }
}).virtual('reactionCount').get(() => this.reactions.length));

export default Thought;