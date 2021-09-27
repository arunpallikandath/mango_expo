"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeLanguageModelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about a single custom language model. Use this information to see
 *             details about the language model in your AWS account. You can also see whether the base
 *             language model used to create your custom language model has been updated. If Amazon Transcribe has
 *             updated the base model, you can create a new custom language model using the updated
 *             base model. If the language model wasn't created, you can use this operation to
 *             understand why Amazon Transcribe couldn't create it. </p>
 */
class DescribeLanguageModelCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "TranscribeClient";
        const commandName = "DescribeLanguageModelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeLanguageModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeLanguageModelResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeLanguageModelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeLanguageModelCommand(output, context);
    }
}
exports.DescribeLanguageModelCommand = DescribeLanguageModelCommand;
//# sourceMappingURL=DescribeLanguageModelCommand.js.map