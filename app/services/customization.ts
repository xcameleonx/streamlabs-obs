import { PersistentStatefulService } from './persistent-stateful-service';
import { mutation } from './stateful-service';

interface ICustomizationServiceState {
  nightMode: boolean;
  updateStreamInfoOnLive: boolean;
  livePreviewEnabled: boolean;
}

/**
 * This class is used to store general UI behavior flags
 * that are sticky across application runtimes.
 */
export class CustomizationService extends PersistentStatefulService<ICustomizationServiceState> {

  static defaultState: ICustomizationServiceState = {
    nightMode: true,
    updateStreamInfoOnLive: true,
    livePreviewEnabled: true
  };

  @mutation()
  SET_NIGHT_MODE(nightMode: boolean) {
    this.state.nightMode = nightMode;
  }

  @mutation()
  SET_UPDATE_STREAM_INFO_ON_LIVE(update: boolean) {
    this.state.updateStreamInfoOnLive = update;
  }

  @mutation()
  SET_LIVE_PREVIEW_ENABLED(enabled: boolean) {
    this.state.livePreviewEnabled = enabled;
  }

  set nightMode(val: boolean) {
    this.SET_NIGHT_MODE(val);
  }

  get nightMode() {
    return this.state.nightMode;
  }

  setUpdateStreamInfoOnLive(update: boolean) {
    this.SET_UPDATE_STREAM_INFO_ON_LIVE(update);
  }

  setLivePreviewEnabled(enabled: boolean) {
    this.SET_LIVE_PREVIEW_ENABLED(enabled);
  }

}
