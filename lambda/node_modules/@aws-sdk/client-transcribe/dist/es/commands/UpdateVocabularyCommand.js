import { __extends } from "tslib";
import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateVocabularyCommand, serializeAws_json1_1UpdateVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request. </p>
 */
var UpdateVocabularyCommand = /** @class */ (function (_super) {
    __extends(UpdateVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVocabularyCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    UpdateVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "UpdateVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVocabularyCommand(input, context);
    };
    UpdateVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVocabularyCommand(output, context);
    };
    return UpdateVocabularyCommand;
}($Command));
export { UpdateVocabularyCommand };
//# sourceMappingURL=UpdateVocabularyCommand.js.map