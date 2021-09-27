import { __extends } from "tslib";
import { GetMedicalTranscriptionJobRequest, GetMedicalTranscriptionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1GetMedicalTranscriptionJobCommand, serializeAws_json1_1GetMedicalTranscriptionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the
 *             job, check the <code>TranscriptionJobStatus</code> field. If the status is
 *                 <code>COMPLETED</code>, the job is finished. You find the results of the completed
 *             job in the <code>TranscriptFileUri</code> field.</p>
 */
var GetMedicalTranscriptionJobCommand = /** @class */ (function (_super) {
    __extends(GetMedicalTranscriptionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMedicalTranscriptionJobCommand(input) {
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
    GetMedicalTranscriptionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "GetMedicalTranscriptionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMedicalTranscriptionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMedicalTranscriptionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMedicalTranscriptionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMedicalTranscriptionJobCommand(input, context);
    };
    GetMedicalTranscriptionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMedicalTranscriptionJobCommand(output, context);
    };
    return GetMedicalTranscriptionJobCommand;
}($Command));
export { GetMedicalTranscriptionJobCommand };
//# sourceMappingURL=GetMedicalTranscriptionJobCommand.js.map